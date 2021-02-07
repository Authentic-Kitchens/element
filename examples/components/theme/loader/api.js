import Element from 'main/index.js'

const { version } = Element

const hostList = {}

const host = hostList[process.env.FAAS_ENV] || hostList.production

export const getVars = () => {
  return Promise.reject(new Error('FUCK YOU'))
}

export const getTestEle = () => {
  return Promise.reject(new Error('FUCK YOU'))
}

export const updateVars = (data, cb) => {
  return Promise.reject(new Error('FUCK YOU'))
}
