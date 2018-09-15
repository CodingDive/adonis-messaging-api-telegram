## Installation
`npm i adonis-messaging-api-telegram`

## Registering the provider
Inside `start/app.js`, register the provider.
```js
const providers = [
  'adonis-messaging-api-telegram/providers/TelegramProvider'
]
```

## Usage
```js
const Telegram = use('Telegram');

Telegram.sendMessage('<userID>', `<message>`,
  {
    disable_web_page_preview: true
  }
);
```

## Env
Add your `TELEGRAM_TOKEN` to your .env file.

