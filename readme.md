# invoice-expense
invoice-expense

### 项目需求: 直接填入发票内容，生成对应的报销文本模板 ###
 
1. 支持标题内容的填入, 交通方式的选择(出租)
2. 支持时间选择, 并能够根据时间自动判断实际报销金额上限, 并计算出差额 
3. 支持数据本地存储
4. 支持地址选择，并计算出两点距离, 并可手动修改距离值
5. 可以清空本地存储数据
6. 数据列表按时间顺序从低到高排列

### 技术模块 ###

1. framework: `backbone`
2. module : `require.js (AMD)`
3. router: `backbone router`
4. js: `es5`
5. css: `postcss` `salad` `bem`
6. 构建: `gulp`

### run ###

	npm install
	gulp
	# start another terminal
	npm start