<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<feed xmlns="http://www.w3.org/2005/Atom">
		<title>Lets Chat Soccer ATOM Feed</title>
		<link rel="alt" href="https://plus.google.com/b/113017478177192749610/collection/kuZ7a"></link>
		<link rel="self" href="http://houyhnhnm.github.io/xml/LCSfeeder.atom"></link>
		<updated>2002-10-02T10:00:00-05:00</updated>
		<id>http://houyhnhnm.github.io/xml/LCSfeeder.atom</id>
		<subtitle>Lets Chat Soccer ATOM Feed, use in aggregators</subtitle>
		<author>
			<name>Houyhnhnm</name>
			<uri>https://github.com/houyhnhnm</uri>
		</author>
		<rights>Copyright (c) 2015, Houyhnhnm</rights>
<xsl:for-each select="document('https://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FG3zHq72fch2xSNs1J2QMY1%22%20as%20LetsChatSoccerFeed%3B%20SELECT%20*%20FROM%20LetsChatSoccerFeed%20WHERE%20feedtype%3D%221%22')/query/results/elementlist/item">
  <entry>
    <title><xsl:value-of select="title"/></title>
    <link><xsl:value-of select="link"/></link>
    <summary><xsl:value-of select="description"/></summary>
    <id><xsl:value-of select="guid"/></id>
    <updated><xsl:value-of select="pubDate"/></updated>
  </entry>
    </xsl:for-each>
</feed>
</xsl:template>
</xsl:stylesheet> 
