// api/callback.js

module.exports = (req, res) => {
    const { code } = req.query;

    const redirectUrl = `https://nichenexus2.blogspot.com/p/callback-handler.html?code=${code}`;

    res.writeHead(302, {
        Location: redirectUrl
    });
    res.end();
};

