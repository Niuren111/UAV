# 无人机之家需求文档 v1.0

## 项目概述
本项目旨在建立一个综合性的无人机行业服务平台，整合就业、运输、培训、低空经济等多个领域的资源，为行业从业者和用户提供全方位的服务。

## 功能模块概述
1. 无人机运输业务供需发布平台
2. 全国无人机培训机构搜索展示
4. 低空空乘订座平台
5. 无人机商城
6. 首页
7. 个人中心

## 一、首页设计需求

### 1.1 页面布局
- 顶部导航栏
  - Logo
  - 主要功能模块入口
  - 搜索框
  - 登录/注册按钮
  
- 轮播图展示区
  - 展示重点业务和活动
  - 展示行业新闻
  
- 快捷功能区
  - 热门岗位推荐
  - 最新运输任务
  - 推荐培训机构
  - 热销无人机产品
  
- 行业资讯区
  - 最新新闻
  - 政策动态
  - 技术前沿
  
- 底部信息
  - 网站介绍
  - 联系方式
  - 友情链接
  - 版权信息

## 二、无人机运输任务供需发布平台需求

### 3.1 功能需求
- 任务发布
  - 运输需求发布
  - 预算设置
  - 时间要求
  - 特殊要求说明
  
- 任务浏览
  - 按地区筛选
  - 按报酬筛选
  - 按任务类型筛选
  
- 投标系统
  - 报价提交
  - 方案说明
  - 资质展示
  
- 订单管理
  - 进行中的任务
  - 已完成任务
  - 评价系统

## 三、全国无人机培训机构搜索展示平台需求

### 4.1 功能需求
- 培训机构列表
  - 按地区筛选
  - 按培训类型筛选
  - 按价格筛选
  
- 机构详情页
  - 机构介绍
  - 培训课程
  - 师资力量
  - 价格说明
  - 报名咨询
  
- 评价系统
  - 学员评价
  - 课程评分
  - 真实案例展示

## 四、低空空乘订座平台需求

### 5.1 功能需求
- 航线查询
  - 出发地/目的地选择
  - 日期选择
  - 座位类型选择
  
- 预订系统
  - 乘客信息填写
  - 座位选择
  - 在线支付
  
- 订单管理
  - 订单查询
  - 行程管理
  - 退改签服务

## 五、无人机商城需求

### 6.1 功能需求
- 商品展示
  - 分类浏览
  - 价格筛选
  - 品牌筛选
  
- 商品详情
  - 产品参数
  - 图片展示
  - 用户评价
  - 相关配件
  
- 购物车
  - 商品管理
  - 结算功能
  
- 订单系统
  - 订单生成
  - 支付系统
  - 物流跟踪

## 六、个人中心需求

### 7.1 功能需求
- 基本信息管理
  - 个人资料
  - 账号安全
  - 实名认证
  
  
- 我的任务
  - 发布的任务
  - 接受的任务
  - 任务状态
  
- 我的订单
  - 商城订单
  - 机票订单
  - 培训订单
  - 运输业务订单
  

## 技术要求
1. 响应式设计，支持多端适配
2. 界面简洁美观，操作流畅
3. 数据安全性保障
4. 支持高并发访问
5. 系统稳定性保障

## 安全要求
1. 用户数据加密存储
2. 支付安全保障
3. 防止恶意攻击
4. 实名认证体系
5. 隐私保护措施

## 后期运营
1. 数据分析系统
2. 用户反馈系统
3. 内容审核机制
4. 客服支持系统
5. 运营数据监控



# 无人机之家项目开发总指导

## 一、技术选型详解

### 1. 前端技术栈详解

#### 1.1 核心框架：React 18
- 选型理由：
  - 组件化开发，代码复用性高
  - Virtual DOM性能优秀
  - 生态系统完善
  - Hooks特性简化状态管理
  - Concurrent Mode支持并发渲染
- 版本选择：18.2.0
- 核心依赖：
  ```json
  {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10"
  }
  ```

#### 1.2 状态管理：Redux Toolkit
- 选型理由：
  - 简化Redux样板代码
  - 内置Immer支持不可变更新
  - 自动配置Redux DevTools
  - TypeScript友好
- 核心依赖：
  ```json
  {
    "@reduxjs/toolkit": "^1.9.3",
    "react-redux": "^8.0.5"
  }
  ```

#### 1.3 UI组件库：Ant Design
- 选型理由：
  - 企业级设计系统
  - 组件丰富，质量可靠
  - TypeScript支持完善
  - 主题定制能力强
- 版本选择：5.x
- 核心依赖：
  ```json
  {
    "antd": "^5.3.0",
    "@ant-design/icons": "^5.0.1",
    "@ant-design/pro-components": "^2.4.4"
  }
  ```

### 2. 后端技术栈详解

#### 2.1 微服务框架：Spring Cloud
- 选型理由：
  - 成熟的微服务解决方案
  - 组件丰富，功能完善
  - 社区活跃，文档完善
  - 易于扩展和维护
- 版本选择：2022.0.0
- 核心依赖：
  ```xml
  <dependencies>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>2022.0.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
  ```

#### 2.2 服务治理：Nacos
- 选型理由：
  - 支持服务发现和配置管理
  - 支持动态配置更新
  - 支持服务健康检查
  - 支持多数据中心
- 版本选择：2.2.0
- 配置示例：
  ```yaml
  spring:
    cloud:
      nacos:
        discovery:
          server-addr: localhost:8848
        config:
          server-addr: localhost:8848
          file-extension: yaml
  ```

## 二、开发规范

### 1. 代码规范

#### 1.1 前端代码规范
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

#### 1.2 后端代码规范
```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-checkstyle-plugin</artifactId>
  <version>3.1.2</version>
  <configuration>
    <configLocation>checkstyle.xml</configLocation>
  </configuration>
</plugin>
```

### 2. 命名规范

#### 2.1 前端命名规范
- 组件命名：PascalCase
- 文件命名：kebab-case
- 变量命名：camelCase
- 常量命名：UPPER_SNAKE_CASE
- CSS类名：kebab-case

#### 2.2 后端命名规范
- 类名：PascalCase
- 方法名：camelCase
- 变量名：camelCase
- 常量名：UPPER_SNAKE_CASE
- 包名：小写字母

## 三、前后端联调对接

### 1. 接口规范

#### 1.1 请求格式
```typescript
interface RequestFormat {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${token}'
  };
  data?: any;
}
```

#### 1.2 响应格式
```typescript
interface ResponseFormat<T> {
  code: number;      // 状态码
  message: string;   // 提示信息
  data: T;          // 响应数据
  timestamp: number; // 时间戳
}
```

### 2. 联调流程

#### 2.1 开发环境联调
1. 本地开发
   ```bash
   # 前端启动
   npm run dev  # localhost:3000
   
   # 后端启动
   ./mvnw spring-boot:run  # localhost:8080
   ```

2. 跨域配置
   ```typescript
   // 前端配置（vite.config.ts）
   export default defineConfig({
     server: {
       proxy: {
         '/api': {
           target: 'http://localhost:8080',
           changeOrigin: true
         }
       }
     }
   });
   ```

   ```java
   // 后端配置
   @Configuration
   public class CorsConfig {
       @Bean
       public CorsFilter corsFilter() {
           CorsConfiguration config = new CorsConfiguration();
           config.addAllowedOrigin("http://localhost:3000");
           config.addAllowedHeader("*");
           config.addAllowedMethod("*");
           config.setAllowCredentials(true);
           
           UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
           source.registerCorsConfiguration("/**", config);
           
           return new CorsFilter(source);
       }
   }
   ```

#### 2.2 接口联调
1. 接口文档
   - 使用Swagger自动生成API文档
   - 使用YApi管理接口文档
   - 使用Postman进行接口测试

2. 联调步骤
   - 前端根据接口文档开发接口调用
   - 后端实现接口并进行单元测试
   - 前端调用接口并处理响应
   - 联调测试并修复问题

### 3. 开发流程

#### 3.1 功能开发流程
1. 需求分析
2. 接口设计
3. 数据库设计
4. 并行开发
   - 前端开发页面和组件
   - 后端开发服务和接口
5. 联调测试
6. 代码审查
7. 提交合并

#### 3.2 版本控制
```bash
# 分支管理
master        # 主分支，稳定版本
develop       # 开发分支
feature/*     # 功能分支
hotfix/*      # 紧急修复分支
release/*     # 发布分支

# 提交规范
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建过程或辅助工具的变动
```

## 四、测试规范

### 1. 前端测试
```typescript
// 组件测试（Jest + React Testing Library）
describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

// E2E测试（Cypress）
describe('Login Page', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

### 2. 后端测试
```java
// 单元测试
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;
    
    @Test
    void shouldCreateUser() {
        User user = new User();
        user.setUsername("test");
        user.setPassword("password");
        
        User created = userService.createUser(user);
        assertNotNull(created.getId());
        assertEquals("test", created.getUsername());
    }
}

// 集成测试
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void shouldRegisterUser() throws Exception {
        mockMvc.perform(post("/api/v1/auth/register")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"username\":\"test\",\"password\":\"password\"}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.code").value(200));
    }
}
```

## 五、部署和运维

### 1. 环境配置
```yaml
# 开发环境
spring:
  profiles: dev
  datasource:
    url: jdbc:mysql://localhost:3306/drone_dev
    username: dev_user
    password: dev_pass

# 测试环境
spring:
  profiles: test
  datasource:
    url: jdbc:mysql://test-server:3306/drone_test
    username: test_user
    password: test_pass

# 生产环境
spring:
  profiles: prod
  datasource:
    url: jdbc:mysql://prod-server:3306/drone_prod
    username: prod_user
    password: prod_pass
```

### 2. 监控方案
```yaml
# Prometheus配置
scrape_configs:
  - job_name: 'spring-actuator'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8080']

# Grafana仪表盘
- name: 'Application Dashboard'
  panels:
    - title: 'JVM Memory Usage'
    - title: 'HTTP Request Rate'
    - title: 'Response Time'
    - title: 'Error Rate'
```
