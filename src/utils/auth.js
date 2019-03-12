import { setS_Store, getS_Store, removeS_Store, setStore, getStore } from 'src/configs/storage'
// import { EncrypMd5 } from 'utils/crypto'
const TokenKey = 'TK'
const RoleKey = 'R'
const NameKey = 'N'
const UserIDKey = 'U'
const BankID = 'B'
const RefreshToken = 'RT'
const BankName = 'BN'
const IsUpdate = 'Up'
/**
 * 移除token
 */
export const removeToken = () => removeS_Store(TokenKey)
export const removeSToken = () => removeS_Store(TokenKey)
export const setUpdate = (truth) => setStore(IsUpdate, truth)
export const getUpdate = () => getStore(IsUpdate)
/**
 * 设置token
 */
export const setToken = (token) => setS_Store(TokenKey, token)

/**
 * 获取token
 */
export const getToken = () => getS_Store(TokenKey)

/**
 * 设置角色
 */
export const setRole = (role) => setS_Store(RoleKey, role)

/**
 * 获取角色
 */
export const getRole = () => getS_Store(RoleKey)

/**
 * 设置用户名
 */
export const setName = (name) => setS_Store(NameKey, name)
/**
 * 获取银行名
 */
export const getName = () => getS_Store(NameKey)
/**
 * 设置银行名
 */
export const setBankName = (name) => setS_Store(BankName, name)
/**
 * 获取用户名
 */
export const getBankName = () => getS_Store(BankName)
/*
 * 设置userID
 */
export const setUserID = (id) => setS_Store(UserIDKey, id)
/**
 * 获取userID
 */
export const getUserID = () => getS_Store(UserIDKey)
/**
 * 设置bankID
 * @param {string} bankid
 */
export const setBankId = (bankid) => setS_Store(BankID, bankid)
/**
 * 获取bankID
 */
export const getBankId = () => parseInt(getS_Store(BankID))
/**
 * 设置refreshtoken
 * @param {string} token
 */
export const setFreshToken = (token) => setS_Store(RefreshToken, token)
/**
 * 获取rtoken
 */
export const getFToken = () => getS_Store(RefreshToken)
