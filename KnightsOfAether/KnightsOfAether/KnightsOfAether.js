var KnightsOfAether;
(function (KnightsOfAether) {
    /** Keeps all the constant variables */
    var Constants = (function () {
        function Constants() {
        }
        //The paths
        Constants.Paths = {
            userAccessPage: "./Source/UserAccess/useraccess.html",
            SignUpPage: "./Source/UserAccess/SignUp/signup.html",
            SignInPage: "./Source/UserAccess/SignIn/signin.html"
        };
        return Constants;
    }());
    KnightsOfAether.Constants = Constants;
})(KnightsOfAether || (KnightsOfAether = {}));
var KnightsOfAether;
(function (KnightsOfAether) {
    var Tools = (function () {
        function Tools() {
        }
        return Tools;
    }());
    KnightsOfAether.Tools = Tools;
})(KnightsOfAether || (KnightsOfAether = {}));
var KnightsOfAether;
(function (KnightsOfAether) {
    /** The main class for the web site */
    var Home = (function () {
        function Home() {
        }
        /** Loads all the .html pages */
        Home.prototype.Load = function () {
            $('#content').empty();
            jQuery.ajaxSetup({ async: false });
            $.get("./Source/Home/home.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/Menu/menu.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/News/news.html", 'html', function (data) { $("#content").append(data); });
            $.get("./Source/Home/Updates/updates.html", 'html', function (data) { $("#content").append(data); });
            jQuery.ajaxSetup({ async: true });
        };
        Home.OnSignInClicked = function () {
            Home.getUserAccessAdditivePage("Sign Up", KnightsOfAether.Constants.Paths.SignInPage);
        };
        Home.OnSignUpClicked = function () {
            Home.getUserAccessAdditivePage("Sign Up", KnightsOfAether.Constants.Paths.SignUpPage);
        };
        /**
         * Adds an additive html page to the main User Access Page
         * @param title: the title of the additive page
         * @param additivePath: the path for the additive page
         */
        Home.getUserAccessAdditivePage = function (title, additivePath) {
            $('#content').empty();
            jQuery.ajaxSetup({ async: false });
            $.get(KnightsOfAether.Constants.Paths.userAccessPage, 'html', function (data) { $("#content").append(data); });
            $.get(additivePath, 'html', function (data) {
                $("#user-access-content").append(data);
                $("#user-access-header-text").html(title);
            });
            jQuery.ajaxSetup({ async: true });
        };
        return Home;
    }());
    KnightsOfAether.Home = Home;
})(KnightsOfAether || (KnightsOfAether = {}));
window.onload = function () {
    var home = new KnightsOfAether.Home();
    home.Load();
};
var News;
(function (News) {
    /**
    * Contains all the patient data
    */
    var BulletinBoard = (function () {
        /**
        * Ctor
        */
        function BulletinBoard(info) {
            //Stores author info
            this.author = "";
            //Stores body info
            this.body = "";
            if (info === null)
                return;
            this.author = info.author;
            this.body = info.body;
        }
        Object.defineProperty(BulletinBoard.prototype, "AUTHOR", {
            /**
            * Gets a string value for AUTHOR
            */
            get: function () {
                return this.author;
            },
            /**
            * Sets a string value for AUTHOR
            */
            set: function (value) {
                this.author = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(BulletinBoard.prototype, "BODY", {
            /**
            * Gets a string value for AUTHOR
            */
            get: function () {
                return this.body;
            },
            /**
            * Sets a string value for AUTHOR
            */
            set: function (value) {
                this.body = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        return BulletinBoard;
    }());
    News.BulletinBoard = BulletinBoard;
    /**
    * The instance used to populate the news bulletin window with the user updates
    */
    News.BulletinInfo = [];
    function Load() {
        var newInstance = $('#news-template').clone(true, true);
        newInstance.attr('style', '');
        $('#news-list').append(newInstance);
        var newsRowIndex = $("#news-list").children().length - 2;
        var rowId = 'news-row-' + newsRowIndex;
        newInstance.attr('id', rowId);
        var $row = $("#" + rowId);
        var userInfo = News.BulletinInfo[newsRowIndex] ? News.BulletinInfo[newsRowIndex] : AddNewEntry();
        userInfo.rowElement = newInstance.get(0);
        $row.find(".news-author").html(userInfo.AUTHOR);
        $row.find(".news-body").html(userInfo.BODY);
    }
    News.Load = Load;
    /**
    * Adds a new entry to the bulletin board
    */
    function AddNewEntry() {
        var userInfo = new BulletinBoard(null);
        News.BulletinInfo.push(userInfo);
        return userInfo;
    }
    News.AddNewEntry = AddNewEntry;
    /**
    * Deletes a news article from the bulletin list
    * @param rowIndex: deletes the patient row by index (its 0-based)
    */
    function DeleteRow(rowIndex) {
        var foundIndex = false;
        for (var index = 0; index <= BulletinBoard.length; index++) {
            var rowId = $('#' + 'news-row-' + index);
            if (rowIndex === index) {
                foundIndex = true;
                rowId.remove();
                continue;
            }
            var indexId = foundIndex ? index - 1 : index;
            rowId.attr('id', 'news-row-' + index);
        }
        News.BulletinInfo.splice(rowIndex, 1);
    }
    News.DeleteRow = DeleteRow;
    /**
    * Deletes all
    * the news article from the bulletin board
    */
    function DeleteAllData() {
        var $row = $('#news-template').siblings();
        for (var indx = 0; indx < $row.length; indx++) {
            $row[indx].remove();
        }
    }
    News.DeleteAllData = DeleteAllData;
})(News || (News = {}));
var UserAccessPages;
(function (UserAccessPages) {
    /**
    * The instance used to populate the news bulletin window with the user updates
    */
    UserAccessPages.UserInfo = [];
    function ShowTermsAndConditions() {
        $('.register-form-container').fadeOut();
        $('.terms-container').fadeIn();
    }
    UserAccessPages.ShowTermsAndConditions = ShowTermsAndConditions;
    function HideTermsAndConditions() {
        $('.register-form-container').fadeIn();
        $('.terms-container').fadeOut();
    }
    UserAccessPages.HideTermsAndConditions = HideTermsAndConditions;
    var UserRegistration = (function () {
        /**
        * Ctor
        */
        function UserRegistration(info) {
            //Stores firstName info
            this.firstName = "";
            //Stores lastName info
            this.lastName = "";
            //Stores eMail info
            this.eMail = "";
            //Stores userName info
            this.userName = "";
            //Stores password info
            this.password = "";
            //Stores confirmPassword info
            this.confirmPassword = "";
            //Stores profilePic info
            this.profilePic = "";
            if (info === null)
                return;
            this.firstName = info.firstName;
            this.lastName = info.lastName;
            this.eMail = info.lastName;
            this.userName = info.userName;
            this.password = info.password;
            this.confirmPassword = info.confirmPassword;
            this.profilePic = info.profilePic;
        }
        Object.defineProperty(UserRegistration.prototype, "FIRST_NAME", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.firstName;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.firstName = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "LAST_NAME", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.lastName;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.lastName = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "EMAIL", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.eMail;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.eMail = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "USER_NAME", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.userName;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.userName = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "PASSWORD", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.password;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.password = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "CONFIRM_PASSWORD", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.confirmPassword;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.confirmPassword = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(UserRegistration.prototype, "PROFILE_PIC", {
            /**
            * Gets a string value for First Name
            */
            get: function () {
                return this.profilePic;
            },
            /**
            * Sets a string value for First Name
            */
            set: function (value) {
                this.profilePic = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        return UserRegistration;
    }());
    UserAccessPages.UserRegistration = UserRegistration;
})(UserAccessPages || (UserAccessPages = {}));
//# sourceMappingURL=KnightsOfAether.js.map