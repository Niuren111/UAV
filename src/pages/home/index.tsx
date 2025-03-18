import { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col, Button, Typography, List, Tag, Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

// 模拟数据
const bannerImages = [
  {
    id: 1,
    url: 'https://via.placeholder.com/1200x400?text=无人机运输服务',
    title: '无人机运输服务',
    description: '高效、安全、便捷的无人机运输解决方案',
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/1200x400?text=无人机培训课程',
    title: '无人机培训课程',
    description: '专业的无人机驾驶培训，助您成为行业精英',
  },
  {
    id: 3,
    url: 'https://via.placeholder.com/1200x400?text=低空空乘体验',
    title: '低空空乘体验',
    description: '享受独特的低空飞行体验，探索未知的天空',
  },
];

const hotJobs = [
  {
    id: 1,
    title: '无人机驾驶员',
    company: '飞翔科技',
    salary: '8k-15k',
    location: '北京',
    tags: ['经验3年+', '本科及以上'],
  },
  {
    id: 2,
    title: '无人机维修工程师',
    company: '云翼航空',
    salary: '10k-20k',
    location: '上海',
    tags: ['经验5年+', '机械/电子相关'],
  },
  {
    id: 3,
    title: '航拍摄影师',
    company: '影空传媒',
    salary: '12k-18k',
    location: '广州',
    tags: ['经验2年+', '摄影/航拍经验'],
  },
];

const transportTasks = [
  {
    id: 1,
    title: '农产品短途配送',
    budget: '5000元',
    location: '江苏省南京市',
    deadline: '2023-04-20',
    status: '招标中',
  },
  {
    id: 2,
    title: '山区医疗物资运输',
    budget: '8000元',
    location: '四川省成都市',
    deadline: '2023-04-25',
    status: '招标中',
  },
  {
    id: 3,
    title: '海岛旅游物资配送',
    budget: '12000元',
    location: '浙江省舟山市',
    deadline: '2023-04-30',
    status: '招标中',
  },
];

const trainingInstitutions = [
  {
    id: 1,
    name: '天翔无人机学院',
    location: '北京市海淀区',
    rating: 4.8,
    students: 3000,
    image: 'https://via.placeholder.com/300x200?text=天翔无人机学院',
  },
  {
    id: 2,
    name: '云驰飞行培训中心',
    location: '上海市浦东新区',
    rating: 4.7,
    students: 2500,
    image: 'https://via.placeholder.com/300x200?text=云驰飞行培训中心',
  },
  {
    id: 3,
    name: '翼天航空学校',
    location: '广州市天河区',
    rating: 4.6,
    students: 2800,
    image: 'https://via.placeholder.com/300x200?text=翼天航空学校',
  },
];

const news = [
  {
    id: 1,
    title: '《民用无人机管理条例》正式施行，行业迎来规范化发展',
    date: '2023-04-01',
    category: '政策动态',
  },
  {
    id: 2,
    title: '国内首个无人机专用航线开通，物流配送效率提升50%',
    date: '2023-03-28',
    category: '行业新闻',
  },
  {
    id: 3,
    title: '新型复合材料在无人机领域应用取得突破，续航能力大幅提升',
    date: '2023-03-25',
    category: '技术前沿',
  },
  {
    id: 4,
    title: '全国无人机驾驶员需求持续增长，就业前景广阔',
    date: '2023-03-20',
    category: '就业资讯',
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* 轮播图 */}
      <section className="banner-section">
        <Carousel autoplay effect="fade">
          {bannerImages.map((banner) => (
            <div key={banner.id} className="banner-item">
              <div className="banner-content" style={{ backgroundImage: `url(${banner.url})` }}>
                <div className="banner-text">
                  <h1>{banner.title}</h1>
                  <p>{banner.description}</p>
                  <Button type="primary" size="large">
                    了解更多
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* 快捷功能区 */}
      <section className="quick-access-section">
        <div className="section-header">
          <Title level={2}>快捷服务</Title>
          <Divider />
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="quick-access-card"
              cover={<div className="card-icon job-icon" />}
            >
              <Meta title="热门岗位" description="无人机行业最新职位" />
              <Button type="link" className="card-link">
                查看岗位 <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="quick-access-card"
              cover={<div className="card-icon transport-icon" />}
            >
              <Meta title="运输任务" description="发布/接受运输任务" />
              <Button type="link" className="card-link">
                进入平台 <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="quick-access-card"
              cover={<div className="card-icon training-icon" />}
            >
              <Meta title="培训课程" description="专业无人机培训机构" />
              <Button type="link" className="card-link">
                搜索课程 <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="quick-access-card"
              cover={<div className="card-icon store-icon" />}
            >
              <Meta title="无人机商城" description="最新无人机产品" />
              <Button type="link" className="card-link">
                去购物 <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
        </Row>
      </section>

      {/* 热门内容展示 */}
      <section className="featured-section">
        <Row gutter={[24, 24]}>
          {/* 热门岗位 */}
          <Col xs={24} lg={8}>
            <Card title="热门岗位" extra={<a href="#">更多</a>} className="featured-card">
              <List
                itemLayout="horizontal"
                dataSource={hotJobs}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="#">{item.title}</a>}
                      description={
                        <>
                          <div>{item.company} | {item.location}</div>
                          <div className="salary">{item.salary}</div>
                          <div>
                            {item.tags.map((tag, index) => (
                              <Tag key={index} color="blue">{tag}</Tag>
                            ))}
                          </div>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* 最新运输任务 */}
          <Col xs={24} lg={8}>
            <Card title="最新运输任务" extra={<a href="#">更多</a>} className="featured-card">
              <List
                itemLayout="horizontal"
                dataSource={transportTasks}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="#">{item.title}</a>}
                      description={
                        <>
                          <div>预算: {item.budget}</div>
                          <div>地点: {item.location}</div>
                          <div>截止日期: {item.deadline}</div>
                          <Tag color="green">{item.status}</Tag>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* 推荐培训机构 */}
          <Col xs={24} lg={8}>
            <Card title="推荐培训机构" extra={<a href="#">更多</a>} className="featured-card">
              <List
                itemLayout="horizontal"
                dataSource={trainingInstitutions}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<img src={item.image} alt={item.name} className="institution-avatar" />}
                      title={<a href="#">{item.name}</a>}
                      description={
                        <>
                          <div>地点: {item.location}</div>
                          <div>评分: {item.rating}/5.0 | 学员数: {item.students}+</div>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </section>

      {/* 行业资讯 */}
      <section className="news-section">
        <div className="section-header">
          <Title level={2}>行业资讯</Title>
          <Divider />
        </div>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4 }}
          dataSource={news}
          renderItem={(item) => (
            <List.Item>
              <Card className="news-card">
                <Tag color="blue">{item.category}</Tag>
                <Title level={4}>{item.title}</Title>
                <div className="news-date">{item.date}</div>
                <Button type="link" className="read-more">
                  阅读全文 <ArrowRightOutlined />
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default HomePage; 