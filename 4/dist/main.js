"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: {
            key: fs.readFileSync('server.key'),
            cert: fs.readFileSync('server.cert'),
        }
    });
    app.enableCors({
        origin: '*',
    });
    await app.listen(10874);
}
bootstrap();
//# sourceMappingURL=main.js.map