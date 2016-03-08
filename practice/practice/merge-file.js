var Source;
(function (Source) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.Init = function () {
            //TODO: Initialize other classes here
        };
        return Main;
    })();
    Source.Main = Main;
})(Source || (Source = {}));
window.onload = function () {
    var main = new Source.Main();
    main.Init();
};
//# sourceMappingURL=merge-file.js.map