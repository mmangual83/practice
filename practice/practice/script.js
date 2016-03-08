/// <reference path="Addons/jquery.d.ts" />
/// <reference path="Pages/Home/Menu/script.ts" />
var Source;
(function (Source) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.Init = function () {
            var nav_bar = new Menu.NavBarBehavior();
            nav_bar.Init();
        };
        return Main;
    })();
    Source.Main = Main;
})(Source || (Source = {}));
window.onload = function () {
    var main = new Source.Main();
    main.Init();
};
//# sourceMappingURL=script.js.map