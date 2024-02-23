var Align = {
    scaleToGameW: function (obj, per) {
        obj.displayWidth = game.config.width * per;
        obj.scaleY = obj.scaleX;
    },

    center: function (obj) {
        obj.x = game.config.width / 2;
        obj.y = game.config.height / 2;
    }
};