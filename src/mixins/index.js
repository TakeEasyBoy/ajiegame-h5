/**
 * 债权模块踢出的公共部分,相同的api有点多
 */
export const claims = {
  data() {
    return {
      timeStamp: null
    }
  },
  methods: {
    // 获取诉讼阶段描述
    getLawSuitState(stage) {
      const actions = new Map([
        ['11', () => '准备诉讼'],
        ['21', () => '一审已立案待开庭'],
        ['22', () => '一审已开庭待判决'],
        ['23', () => '一审判决公告期'],
        ['24', () => '一审判决生效'],
        ['25', () => '二审已立案待开庭'],
        ['26', () => '二审已开庭待判决'],
        ['27', () => '二审判决生效'],
        ['31', () => '执行受理'],
        ['41', () => '第一次拍卖'],
        ['42', () => '第二次拍卖'],
        ['43', () => '第三次拍卖'],
        ['51', () => '庭外和解'],
        ['52', () => '终结执行'],
        ['defalut', () => '-']
      ])
      const action = actions.get(stage) || actions.get('defalut')
      return action.call(this)
    },
    // 获取客户类型
    getCustomerType(type) {
      const actions = new Map([
        [1, () => '对公贷款'],
        [2, () => '中小企业'],
        [3, () => '个人贷款'],
        ['defalut', () => '-']
      ])
      const action = actions.get(type) || actions.get('defalut')
      return action.call(this)
    }
  }
}
export const pagination = {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      // 每页条数改变后,将显示第一页的数据
      this.currentPage = 1
      this.loading = true
      this.getDataLists()
    },
    // 页码跳转回调
    handleCurrentChange(val) {
      this.currentPage = val
      this.loading = true
      this.getDataLists()
    }
  }
}
