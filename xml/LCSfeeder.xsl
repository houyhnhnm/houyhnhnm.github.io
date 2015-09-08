<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<rss version="2.0">
<channel>
  <title>Lets Chat Soccer RSS Feed</title>
  <link>https://plus.google.com/b/113017478177192749610/collection/kuZ7a</link>
  <description>Lets Chat Soccer RSS Feed, use in aggregators</description>
<xsl:for-each select="document('https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FG3zHq72fch2xSNs1J2QMY1%22%20as%20LetsChatSoccerFeed%3B%20SELECT%20*%20FROM%20LetsChatSoccerFeed%20WHERE%20feedtype%3D%221%22')/query/results/elementlist/item">
  <item>
    <title><xsl:value-of select="title"/></title>
    <link><xsl:value-of select="link"/></link>
    <description><xsl:value-of select="description"/></description>
    <guid><xsl:value-of select="guid"/></guid>
  </item>
    </xsl:for-each>
</channel>
</rss>
</xsl:template>
</xsl:stylesheet> 


<!--
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/rss/channel">
<xsl:for-each select="document('https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FG3zHq72fch2xSNs1J2QMY1%22%20as%20LetsChatSoccerFeed%3B%20SELECT%20*%20FROM%20LetsChatSoccerFeed%20WHERE%20feedtype%3D%221%22')/query/results/elementlist/item">
  <item>
    <title><xsl:value-of select="title"/></title>
    <link><xsl:value-of select="link"/></link>
    <description><xsl:value-of select="description"/></description>
    <guid><xsl:value-of select="guid"/></guid>
  </item>
    </xsl:for-each>
</xsl:template>
</xsl:stylesheet> 
-->