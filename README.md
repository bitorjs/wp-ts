js 转 Typescript 步骤

1、原来的语法结构基本不变
2、添加大量的变量类型，前期无要求，可以全部使用 any
3、参数中可要可不要的，设置为 可选参数 ?:
4、js 转 type 自动转为 严格模式，所以要遵守严格模式的要求，比如 变量先定义才可以使用，再比如，变量不能重复定义 等