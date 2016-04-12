module KnightsOfAether {

    /** The main class for the web site */
    export class Home {

        /** Loads all the .html pages */
        public Load(): void {
            $('#content').empty();

            jQuery.ajaxSetup({ async: false });
            $.get("./Source/Home/home.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/Menu/menu.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/News/news.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/Updates/updates.html", 'html', function (data) { $("#content").append(data); });
            jQuery.ajaxSetup({ async: true });
        }

        public static OnSignInClicked(): void {
            Home.getUserAccessAdditivePage("Sign Up", Constants.Paths.SignInPage);
        }

        public static OnSignUpClicked(): void {
            Home.getUserAccessAdditivePage("Sign Up", Constants.Paths.SignUpPage);
        }


         /**
          * Adds an additive html page to the main User Access Page
          * @param title: the title of the additive page
          * @param additivePath: the path for the additive page
          */
        private static getUserAccessAdditivePage(title: string, additivePath: string):void {
            $('#content').empty();
            jQuery.ajaxSetup({ async: false });
            $.get(Constants.Paths.userAccessPage, 'html', function (data) { $("#content").append(data); });
            $.get(additivePath, 'html', function (data) {
                $("#user-access-content").append(data);
                $("#user-access-header-text").html(title);
            });
            jQuery.ajaxSetup({ async: true });
        }
    }
}

window.onload = () => {
    var home = new KnightsOfAether.Home();
    home.Load();
};

