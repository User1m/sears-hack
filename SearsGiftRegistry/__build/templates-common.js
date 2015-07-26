angular.module('templates-common', ['../templates/page2.tpl.html', '../templates/page4.tpl.html', '../templates/side-menu1.tpl.html']);

angular.module("../templates/page2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/page2.tpl.html",
    "<ion-view title=\"Sears Gift Registry\" ng-controller=\"MyController\">\n" +
    "    <ion-content padding=\"true\" class=\"has-header\">\n" +
    "        <form>\n" +
    "            <img src=\"http://www.ringlogy.net/wp-content/uploads/2014/10/bridal-registry-7.jpg\" style=\"width: 100%; height: 200px;\">\n" +
    "            <ion-list>\n" +
    "                <label class=\"item item-input\">\n" +
    "                    <span class=\"input-label\">Username</span>\n" +
    "                    <input type=\"text\" placeholder=\"{{username}}\">\n" +
    "                </label>\n" +
    "                <label class=\"item item-input\">\n" +
    "                    <span class=\"input-label\">Password</span>\n" +
    "                    <input type=\"password\" placeholder=\"\">\n" +
    "                </label>\n" +
    "            </ion-list>\n" +
    "            <div class=\"spacer\" style=\"height: 40px;\"></div>\n" +
    "            <a href=\"#/search\" class=\"button button-stable button-block \">Log in</a>\n" +
    "            <button class=\"button button-positive button-clear button-block \">Or create an account</button>\n" +
    "        </form>\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("../templates/page4.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/page4.tpl.html",
    "<ion-view title=\"Search\">\n" +
    "    <ion-content padding=\"true\" class=\"has-header\">\n" +
    "        <div class=\"list card\">\n" +
    "            <div class=\"item item-divider\">Products</div>\n" +
    "            <div class=\"item item-body\">\n" +
    "                <ion-list>\n" +
    "                    <label class=\"item item-input\">\n" +
    "                        <span class=\"input-label\">Input</span>\n" +
    "                        <input type=\"text\" placeholder=\"Search for gifts!\">\n" +
    "                    </label>\n" +
    "                </ion-list>\n" +
    "                <button class=\"button button-stable button-block \">Search!</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <ion-list>\n" +
    "            <ion-item>Item 1</ion-item>\n" +
    "            <ion-item>Item 2</ion-item>\n" +
    "            <ion-item>Item 3</ion-item>\n" +
    "        </ion-list>\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("../templates/side-menu1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../templates/side-menu1.tpl.html",
    "<ion-side-menus>\n" +
    "    <ion-side-menu side=\"left\">\n" +
    "        <ion-header-bar class=\"bar-stable\">\n" +
    "            <h1 class=\"title\">Heading</h1>\n" +
    "        </ion-header-bar>\n" +
    "        <ion-content padding=\"true\" scroll=\"false\" class=\"has-header\">\n" +
    "            <h1>Menu</h1>\n" +
    "            <ion-list>\n" +
    "                <ion-item>Item 1</ion-item>\n" +
    "                <ion-item>Item 2</ion-item>\n" +
    "                <ion-item>Item 3</ion-item>\n" +
    "            </ion-list>\n" +
    "        </ion-content>\n" +
    "    </ion-side-menu>\n" +
    "    <ion-pane ion-side-menu-content=\"\">\n" +
    "        <ion-content padding=\"true\" scroll=\"false\" class=\"has-header\"></ion-content>\n" +
    "    </ion-pane>\n" +
    "</ion-side-menus>");
}]);
