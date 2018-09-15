## Registering the provider
Inside `start/app.js`
```js
const providers = [
	'adonis-stripe/providers/TelegramProvider'
]
```

## Usage
```js
const Telegram = use('Telegram');
```

## Env
Add your `TELEGRAM_TOKEN` to your .env file.

