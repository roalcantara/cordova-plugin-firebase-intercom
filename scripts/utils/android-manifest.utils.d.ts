export declare class AndroidManifestUtils {
    private theManifest;
    constructor(theManifest: string);
    removeServiceNodeBy(attrs: {
        name: string;
    }): AndroidManifestUtils;
    toString(): string;
    private getServiceRegExp;
}
