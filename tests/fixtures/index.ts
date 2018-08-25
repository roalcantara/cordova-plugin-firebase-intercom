import * as fs from 'fs'
import * as path from 'path'

export class Fixture {
  static path(fileName: string): any {
    return path.resolve(__dirname, fileName)
  }

  static read(fileName: string): string {
    const filePath = Fixture.path(fileName)

    return fs.readFileSync(filePath, { encoding: 'utf8' })
  }
}
