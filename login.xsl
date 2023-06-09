<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="t3.css" type="text/css"/>
         <style>
           *{cursor: auto !important;
           }
           .verso{
           color:blue;
             font-weight: bold;
			  text-indent: 20px;
			           }
			
			 
			.verso:nth-child(even) {
			  background-color: white;
			}
			
			.verso:nth-child(odd) {
			  background-color: red;
			}
         </style>
         <script>
          
          function guardarNombre() {
              var nombre = document.getElementById('nombre').value;
              sessionStorage.setItem('nombre', nombre);
              window.location.href = 'principal.html';
            }
         </script>
      </head> 
      <body>
        <xsl:apply-templates/>
     
      </body>
    </html>
  </xsl:template>

  <xsl:template match="login/titulo">
    <h1 class="titulo">
      <xsl:value-of select="."/>
    </h1>
  </xsl:template>

  <xsl:template match="login/descripcion">
    <p>
      <xsl:value-of select="."/>
    </p>
  </xsl:template>
  
    <xsl:template match="caja">
    <input type="text" id="nombre" >
      <xsl:value-of select="."/>
      </input>
      <br/><br/>
  </xsl:template>


   <xsl:template match="boton">
    <div class="boton" onclick="guardarNombre()">
      <xsl:value-of select="."/>
      </div>
  </xsl:template>
  
 
  
  
  <xsl:template match="cancion">
	<xsl:apply-templates select="nombre"/> 
	<xsl:apply-templates select="descripcion"/> 
	<xsl:apply-templates select="letra"/> 
	<xsl:apply-templates select="verso"/> 
	<xsl:apply-templates select="estrofa"/> 
</xsl:template>

  
  <xsl:template match="login/cancion/nombre">
  <h2>
    <xsl:value-of select="."/>
  </h2>
  <br/>
</xsl:template>
  

<xsl:template match="descripcion">
		
		<p class="descripcion">
			<xsl:value-of select="."/> 
			<br/><br/>
			</p>
			
		
</xsl:template>	

<xsl:template match="letra">
				<div class="letra">
					<xsl:apply-templates select="estrofa"/> 
				</div>
				
</xsl:template>
	

	
	
	
<xsl:template match="estrofa">
		
			<div class="estrofa">
			<xsl:apply-templates select="verso"/> 
			<br/>
			<br/>
			</div>
		
</xsl:template>	

<xsl:template match="verso">
				<div class="verso">
					<xsl:value-of select="."/>
				</div>
				
</xsl:template>


</xsl:stylesheet>
