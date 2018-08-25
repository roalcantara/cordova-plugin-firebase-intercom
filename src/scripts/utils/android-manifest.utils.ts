const REPLACEABLE_CHARACTER = '<?>'
const SERVICE_NODE_PATTERN = `(.*)<service[^>](.*)${REPLACEABLE_CHARACTER}(.|\n)*?</service>`

export class AndroidManifestUtils {
  constructor(private theManifest: string) { }

  removeServiceNodeBy(attrs: { name: string }): AndroidManifestUtils {
    const regExp = this.getServiceRegExp(attrs.name)

    if (this.theManifest.match(regExp)) {
      this.theManifest = this.theManifest.replace(regExp, '')
    }

    return this
  }

  toString(): string {
    return this.theManifest
  }

  private getServiceRegExp = (serviceName: string): RegExp => {
    return new RegExp(SERVICE_NODE_PATTERN.replace(REPLACEABLE_CHARACTER, serviceName))
  }
}
