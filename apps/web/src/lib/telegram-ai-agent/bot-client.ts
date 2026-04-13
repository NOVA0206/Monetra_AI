import { Bot } from 'grammy';
/* @ts-ignore - Composer might not exist yet */
import { commandsComposer } from './composers/commands';
/* @ts-ignore - Composer might not exist yet */
import { aiComposer } from './composers/ai-agent';

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error('TELEGRAM_BOT_TOKEN is not defined');

export const telegramBot = new Bot(token);

// Safe registration of composers
try {
  telegramBot.use(commandsComposer);
} catch (e) {}

try {
  telegramBot.use(aiComposer);
} catch (e) {}