(function(){}).call(this),function(){var t,e;t=angular.module("gulpAngular",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","ngMaterial","sidenav"]).config(["$routeProvider",function(t){return t.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"components/contact-form/contact.html",controller:"MainCtrl"}).when("/portfolio",{templateUrl:"components/portfolio/portfolio.html",controller:"MainCtrl"}).when("/about",{templateUrl:"app/main/about.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("sidenav",["ngMaterial"]).controller("sideNav",["$scope","$timeout","$mdSidenav","$log",function(t,e,o,r){return t.toggleLeft=function(){return o("left").toggle().then(function(){return r.debug("toggle left is done")})}}]).controller("LeftCtrl",["$scope","$timeout","$mdSidenav","$log",function(t,e,o,r){return t.close=function(){return o("left").close().then(function(){return r.debug("close LEFT is done")})}}]),e={},t.controller("userForm",["$scope","$timeout",function(){return this.sendMsg=function(t){return t.push(this.user),console.log(t)}}])}.call(this),function(){angular.module("gulpAngular").controller("MainCtrl",["$scope",function(t){return t.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Zepto",url:"http://zeptojs.com/",description:"The aerogel-weight jQuery-compatible JavaScript library.",logo:"zepto.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Stylus",url:"http://learnboost.github.io/stylus/",description:"Stylus is a revolutionary new language, providing an efficient",logo:"stylus.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],angular.forEach(t.awesomeThings,function(t){return t.rank=Math.random()})}])}.call(this),angular.module("gulpAngular").run(["$templateCache",function(t){t.put("app/main/about.html","<h1>Что мы делаем?</h1><ul><li><h3>Проектирование удобного сайта</h3><p>Разработаем грамотную концепцию сайта, подробную структуру и прототипы.</p></li><li><h3>Современный и уникальный дизайн</h3><p>Сделаем сайт запоминающимся, привлекающим внимание, отличающимся от сайтов конкурентов.</p></li><li><h3>Верстка и программирование от А до Я</h3><p>Оптимизируем сайт под любой размер экрана: от широкоформатных мониторов до мобильных устройств.</p></li></ul>"),t.put("app/main/main.html","<h1>Что мы предлагаем?</h1><ul><li><h3>Для кого?</h3><p>Всем, кто видит перспективы развития своего бизнеса.</p></li><li><h3>Интернет-магазины:</h3><p>Удобный поиск необходимого товара на мобильных устройствах. Вашему пользователю не придется долго ждать загрузки фотографий, текстовый контент оптимально сокращен.</p></li><li><h3>Корпоративный бизнес:</h3><p>Удобно читать контент.</p></li><li><h3>Сайты-визитки, старт-апы:</h3><p>Быстрое знакомство, легкий способ связи. Ярко, минималистично, без долгих поисков нужной информации.</p></li><li><h3>Порталы, сообщества:</h3><p>Оптимизация массивных текстовых блоков для удобства чтения на мобильных устройствах.</p></li></ul>"),t.put("components/contact-form/contact.html",'<form name="userForm" novalidate="" ng-controller="userForm as form" ng-submit="form.sendMsg(user)"><md-content class="md-padding"><div layout="" layout-sm="column"><md-input-container flex=""><label>Имя</label> <input ng-model="form.user.firstName" required=""><div ng-messages="form.user.firstName.$error"><div ng-message="required">Это поле обязательно</div></div></md-input-container><md-input-container flex=""><label>Фамилия</label> <input ng-model="form.user.lastName" required=""><div ng-messages="form.user.lastName.$error"><div ng-message="required">Это поле обязательно</div></div></md-input-container></div><md-input-container><label>Email</label> <input ng-model="form.user.email" type="email" required=""></md-input-container><md-input-container flex=""><label>Компания</label> <input ng-model="form.user.company"></md-input-container><md-input-container flex=""><label>Ваше сообщение</label> <textarea ng-model="form.user.message" columns="1" md-maxlength="1000"></textarea></md-input-container><md-button type="submit" class="md-primary md-hue-1" ng-submit="form.$valid">Отправить сообщение</md-button><p>Форма сообщения <strong>{{form.user}}</strong></p></md-content></form>'),t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" hide-gt-md=""><a href="#/"><img src="/assets/images/logo.svg"></a><section flex="" layout="row" layout-align="left center"><md-button href="#/about" class="md-raised">About</md-button><md-button href="#/contact" class="md-raised">Contact</md-button></section></md-toolbar>'),t.put("components/footer/footer.html",'<md-toolbar layout="row" layout-align="center center">г. Екатеринбург, звоните (343) 207 25 70 или&nbsp;<a href="#/contact">напишите нам</a></md-toolbar>'),t.put("components/portfolio/portfolio.html",'<div class="portfolio"><div class="portfolio-filter"><md-checkbox aria-label="Checkbox 1">Наш дизайн</md-checkbox><md-checkbox aria-label="Checkbox 2">Наш фронтенд</md-checkbox><md-checkbox aria-label="Checkbox 3">Наш бэкэнд</md-checkbox></div><div class="portfolio-list"><div class="portfolio-item md-whiteframe-z1"><div class="clearfix"><div class="screen-shot"><img src="/assets/images/project/thumbs/mokka.png"></div><div class="developers"><h4 class="project-name">Mokka</h4><h5 class="designer">Дизайн: Анна Ивойлова</h5><p class="frontend">Верстка: Евгений Соловьев</p><p class="backend">Серверная часть: Евгений Морозов</p><a href="http://mokka-media.ru/">http://mokka-media.ru/</a></div></div><p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque egestas purus, quis iaculis urna aliquet eu. Sed a lacus lectus. In turpis lorem, rhoncus et commodo at, interdum nec velit.</p></div></div></div>')}]);