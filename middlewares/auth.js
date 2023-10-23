const { User, News } = require("../models/index");
const { decodeToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
    try {
        let token = req.headers.bearer;

        if (!token || token == null) {
            throw { name: "Invalid token" };
        }

        let payload;
        try {
            payload = decodeToken(token);
        } catch (error) {
            throw { name: "Invalid Signature" };
        }

        let author = await User.findByPk(payload.id);

        if (!author) throw { name: "Unauthenticated" };

        req.author = { id: author.id, email: author.email, role: author.role };

        next();
    } catch (error) {
        next(error);
    }
}

async function authorization(req, res, next) {
    try {
        let newsId = req.params.id;
        let news = await News.findByPk(newsId);

        if (!news) throw { name: "NewsNotFound" };
        // console.log(news);
        if (news.UserId !== req.author.id && req.author.role != "admin") {
            throw { name: "Forbidden" };
        }

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    authentication,
    authorization,
};
