/**
 * adonis-messaging-api-telegram provider
 *
 * (c) Mikey Stengel
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict';

const { ServiceProvider } = require('@adonisjs/fold');
const { TelegramClient } = require('messaging-api-telegram');

class TelegramProvider extends ServiceProvider {
  register() {
    this.app.singleton('Adonis/Addons/Telegram', (app) => {
      const token = app.use('Adonis/Src/Env').get('TELEGRAM_TOKEN');
      return TelegramClient.connect(token);
    });

    this.app.alias('Adonis/Addons/Telegram', 'Telegram');
  }
}

module.exports = TelegramProvider;
