from telegram.ext import Updater, CommandHandler, MessageHandler, Filters


def start(update, context):
    update.message.reply_text('Привет! Здесь ты будешь получать актуальные уведомления от сайта https://zakupki.mos.ru/')


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
    dispatcher.add_handler(CommandHandler("help", help))

    dispatcher.add_handler(MessageHandler(Filters.text, text))

    dispatcher.add_error_handler(error)

    updater.start_polling()

    updater.idle()


if __name__ == '__main__':
    main()
