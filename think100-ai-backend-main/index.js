// index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/analyze', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients) {
    return res.status(400).json({ error: 'Missing ingredients field' });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Analyze the following ingredients for health impact: ${ingredients}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    const result = completion.choices[0].message.content;
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to analyze ingredients' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is up!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
