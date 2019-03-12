## style文档说明
1. [common.scss](common.scss)用于默认样式的重置,以及一些公共样式
2. [compatableIE.scss](compatableIE.scss)用于兼容IE的,目前样式比较少
3. [media.scss](media.scss)用于媒体查询的,实际上用处不大,这个ui的设计稍微有点扯,目前是百分比布局,没做到真正的响应式
4. [mixin.scss](mixin.scss) 用于```scss```公共方法的声明
5. [userelement.scss](userelement.scss)用于自定义```element-ui```的样式更改,为了不污染其他的样式,请记得加上你的```namespace```
6. [variable.scss](variable.scss) 用于声明UI颜色,全局可用