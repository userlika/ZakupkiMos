import telebot
#from telebot import types

#from aiogram.types import KeyboardButton
#from telegram import bot, message
from aiogram import bot
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters


def start(update, context):
    update.message.reply_text(
        'Привет! Здесь ты будешь получать актуальные уведомления от сайта https://zakupki.mos.ru/')
    update.message.reply_text('Чтобы посмотреть последние новости на сайте, набери команду: /news')
    update.message.reply_text('Чтобы подписаться на интересующие уведомления, набери команду: /notification')


def news(update, context):
    update.message.reply_text('Последние новости на сайте: https://old.zakupki.mos.ru/#/news')


def notification(update, context):
    update.message.reply_text('Вы подписались на уведомления! ')



def help(update, context):
    update.message.reply_text('help command received')


def error(update, context):
    update.message.reply_text('an error occured')


def text(update, context):
    text_received = update.message.text
    update.message.reply_text(f'did you said "{text_received}" ?')


def main():
    TOKEN = "2111201366:AAFYhr5MKC2r9Gu7HPTTCWAmgxeb-uTDH9s"

    updater = Updater(TOKEN, use_context=True)
    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("news", news))
    dispatcher.add_handler(CommandHandler("notification", notification))
    dispatcher.add_handler(CommandHandler("help", help))

    dispatcher.add_handler(MessageHandler(Filters.text, text))

    dispatcher.add_error_handler(error)

    updater.start_polling()

    updater.idle()


if __name__ == '__main__':
    main()

