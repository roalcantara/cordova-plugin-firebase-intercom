"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var REPLACEABLE_CHARACTER = '<?>';
var SERVICE_NODE_PATTERN = "(.*)<service[^>](.*)" + REPLACEABLE_CHARACTER + "(.|\n)*?</service>";
var AndroidManifestUtils = /** @class */ (function () {
    function AndroidManifestUtils(theManifest) {
        this.theManifest = theManifest;
        this.getServiceRegExp = function (serviceName) {
            return new RegExp(SERVICE_NODE_PATTERN.replace(REPLACEABLE_CHARACTER, serviceName));
        };
    }
    AndroidManifestUtils.prototype.removeServiceNodeBy = function (attrs) {
        var regExp = this.getServiceRegExp(attrs.name);
        if (this.theManifest.match(regExp)) {
            this.theManifest = this.theManifest.replace(regExp, '');
        }
        return this;
    };
    AndroidManifestUtils.prototype.toString = function () {
        return this.theManifest;
    };
    return AndroidManifestUtils;
}());
exports.AndroidManifestUtils = AndroidManifestUtils;
//# sourceMappingURL=android-manifest.utils.js.map