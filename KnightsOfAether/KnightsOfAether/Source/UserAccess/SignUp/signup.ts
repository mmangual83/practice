module UserAccessPages {
    /**
    * The instance used to populate the news bulletin window with the user updates
    */
    export var UserInfo: UserRegistration[] = [];

    export function ShowTermsAndConditions(): void {
        $('.register-form-container').fadeOut();
        $('.terms-container').fadeIn();
    }

    export function HideTermsAndConditions(): void {
        $('.register-form-container').fadeIn();
        $('.terms-container').fadeOut();
    }

    export class UserRegistration {
        /**
        * Gets a string value for First Name
        */
        public get FIRST_NAME(): string {
            return this.firstName;
        };

        /**
        * Sets a string value for First Name
        */
        public set FIRST_NAME(value: string) {
            this.firstName = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get LAST_NAME(): string {
            return this.lastName;
        };

        /**
        * Sets a string value for First Name
        */
        public set LAST_NAME(value: string) {
            this.lastName = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get EMAIL(): string {
            return this.eMail;
        };

        /**
        * Sets a string value for First Name
        */
        public set EMAIL(value: string) {
            this.eMail = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get USER_NAME(): string {
            return this.userName;
        };

        /**
        * Sets a string value for First Name
        */
        public set USER_NAME(value: string) {
            this.userName = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get PASSWORD(): string {
            return this.password;
        };

        /**
        * Sets a string value for First Name
        */
        public set PASSWORD(value: string) {
            this.password = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get CONFIRM_PASSWORD(): string {
            return this.confirmPassword;
        };

        /**
        * Sets a string value for First Name
        */
        public set CONFIRM_PASSWORD(value: string) {
            this.confirmPassword = value;
        };

        /**
        * Gets a string value for First Name
        */
        public get PROFILE_PIC(): string {
            return this.profilePic;
        };

        /**
        * Sets a string value for First Name
        */
        public set PROFILE_PIC(value: string) {
            this.profilePic = value;
        };

        //Stores firstName info
        private firstName: string = "";
        //Stores lastName info
        private lastName: string = "";
        //Stores eMail info
        private eMail: string = "";
        //Stores userName info
        private userName: string = "";
        //Stores password info
        private password: string = "";
        //Stores confirmPassword info
        private confirmPassword: string = "";
        //Stores profilePic info
        private profilePic: string = "";

        //the html element
        public element: HTMLElement;

        /**
        * Ctor
        */
        constructor(info: UserRegistration) {
            if (info === null) return;

            this.firstName = info.firstName;
            this.lastName = info.lastName;
            this.eMail = info.lastName;
            this.userName = info.userName;
            this.password = info.password;
            this.confirmPassword = info.confirmPassword;
            this.profilePic = info.profilePic;
        }
    }
}