import RabbitMQ from "../modules/RabbitMQ";
import {rabbitMQ as config} from "../config.json";

export default {
    publish: function (key, message) {
        let rabbitMQ = new RabbitMQ(config.serverURL, config.exchange, config.exchangeType);
        return rabbitMQ.connect()
            .then(function () {
                return rabbitMQ.publish(key, message);
            }).then(function () {
                rabbitMQ.disconnect();
            });
    }
};