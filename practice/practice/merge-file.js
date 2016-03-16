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
var Source;
(function (Source) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.Init = function () {
            //TODO: Initialize other classes here
        };
        return Main;
    }());
    Source.Main = Main;
})(Source || (Source = {}));
window.onload = function () {
    var main = new Source.Main();
    main.Init();
};
//# sourceMappingURL=merge-file.js.map