const contentMap = [
  {
    section: "首页",
    tags: ["爱游戏", "热门推荐", "新游上线"],
    keywords: ["爱游戏", "最新游戏", "热门推荐"]
  },
  {
    section: "攻略中心",
    tags: ["爱游戏", "攻略", "技巧"],
    keywords: ["爱游戏攻略", "通关技巧", "游戏秘籍"]
  },
  {
    section: "新闻资讯",
    tags: ["爱游戏", "新闻", "更新"],
    keywords: ["爱游戏新闻", "版本更新", "游戏资讯"]
  },
  {
    section: "社区互动",
    tags: ["爱游戏", "社区", "讨论"],
    keywords: ["爱游戏社区", "玩家交流", "游戏论坛"]
  },
  {
    section: "排行榜",
    tags: ["爱游戏", "排行", "评分"],
    keywords: ["爱游戏排行榜", "游戏评分", "热门排行"]
  },
  {
    section: "资源下载",
    tags: ["爱游戏", "下载", "资源"],
    keywords: ["爱游戏下载", "游戏资源", "客户端"]
  }
];

const siteUrl = "https://m-index-aiyouxi.com.cn";

function searchContent(query, source = contentMap) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  for (const entry of source) {
    const matchTags = entry.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const matchKeywords = entry.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery));
    const matchSection = entry.section.toLowerCase().includes(lowerQuery);

    if (matchTags || matchKeywords || matchSection) {
      results.push(entry);
    }
  }

  return results;
}

function filterByTag(tag, source = contentMap) {
  const lowerTag = tag.toLowerCase();
  return source.filter(entry =>
    entry.tags.some(t => t.toLowerCase() === lowerTag)
  );
}

function generateSectionLink(sectionName) {
  const encoded = encodeURIComponent(sectionName);
  return `${siteUrl}/section/${encoded}`;
}

function getSectionKeywords(sectionName) {
  const entry = contentMap.find(e => e.section === sectionName);
  return entry ? entry.keywords : [];
}

function printContentSummary() {
  console.log(`站点地图 (${siteUrl})`);
  console.log("内容分区概览：");
  contentMap.forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.section} [标签: ${entry.tags.join(", ")}]`);
  });
}

printContentSummary();

// 示例搜索与过滤调用
console.log("\n搜索 '爱游戏' 结果：", searchContent("爱游戏"));
console.log("按标签 '攻略' 过滤：", filterByTag("攻略"));
console.log("攻略中心链接：", generateSectionLink("攻略中心"));
console.log("首页关键词：", getSectionKeywords("首页"));