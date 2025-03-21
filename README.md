# 无人机之家 网站项目开发总指导

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

## 六、项目管理

### 1. 开发计划
1. 初始化阶段（2周）
   - 环境搭建
   - 技术选型确认
   - 开发规范制定

2. 开发阶段（12周）
   - 用户服务（2周）
   - 招聘服务（2周）
   - 任务服务（2周）
   - 培训服务（2周）
   - 订票服务（2周）
   - 商城服务（2周）

3. 测试阶段（2周）
   - 单元测试
   - 集成测试
   - 性能测试

4. 部署阶段（1周）
   - 环境部署
   - 系统监控
   - 运维交接

### 2. 质量控制
1. 代码质量
   - 代码审查
   - 自动化测试
   - 性能监控

2. 文档管理
   - 接口文档
   - 部署文档
   - 运维文档

3. 版本控制
   - 分支管理
   - 代码合并
   - 版本发布 # UAV
无人机之机
