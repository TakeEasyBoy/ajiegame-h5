## mixins
### 分页
所有页面的分页都是通过```mixins```的```pagination```来完成,调用这需要自行实现一个```getDataLists```的方法同时还要对页码进行重新赋值,以下是mixins的默认值,需要调用者更具实际情况进行更改相应的页码,当前页等等属性
```
currentPage: 1,
pageSize: 10,
totalCount: 0,
loading: false
```
### claim部分,获取诉讼阶段描述文字
采用了```Map```的方式进行了判断,调用者需传递一个当前诉讼阶段进来,便可获取对应字段,如需添加阶段,只需按照相同形式进行添加即可
用法参见 [claimList](../pages/ClaimManage/children/info.vue)