function generateStats(data, topCitiesCount = 5) {
  const stats = {
    validUsers: data.length,
    domains: {},
    topCities: [],
  };

  stats.domains = data.reduce((acc, user) => {
    const domain = user.email.split("@")[1];
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});

  const cityCounts = data.reduce((acc, user) => {
    acc[user.address] = (acc[user.address] || 0) + 1;
    return acc;
  }, {});

  stats.topCities = Object.entries(cityCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topCitiesCount);

  return stats;
}

module.exports = { generateStats };
