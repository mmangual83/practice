var Menu;
(function (Menu) {
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.prototype.Init = function () {
            alert("hello");
        };
        return NavBar;
    })();
    Menu.NavBar = NavBar;
})(Menu || (Menu = {}));
//# sourceMappingURL=Menu.js.map