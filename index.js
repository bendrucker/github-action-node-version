import esMain from 'es-main'
import { readFile } from 'fs/promises'
import { parse } from 'yaml'
import { debug, getInput, setFailed, setOutput } from '@actions/core'

if (esMain(import.meta)) {
  try {
    await main()
  } catch (err) {
    setFailed(err.message)
  }
}

export default async function main () {
  const action = await loadActionYaml()
  const using = action.runs?.using

  if (!using) {
    throw new Error('Missing "using" in action.yml')
  }

  debug(`runs.using: ${using}`)

  if (!using.startsWith('node')) {
    throw new Error('Invalid "using" in action.yml (must start with "node")')
  }

  const versionString = using.slice('node'.length)
  const version = parseInt(versionString, 10)

  if (isNaN(version)) {
    debug(`versionString: ${versionString}`)
    throw new Error('Invalid "using" in action.yml (version is not a number)')
  }

  setOutput('version', version.toString())

  return version
}

async function loadYaml (path) {
  debug(`loading action YAML from ${path}`)

  const yaml = await readFile(path, 'utf8')
  return parse(yaml)
}

async function loadActionYaml () {
  return await loadYaml(getInput('path', {required: true}))
}

