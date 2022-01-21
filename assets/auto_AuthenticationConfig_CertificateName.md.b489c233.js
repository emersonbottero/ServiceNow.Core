import{_ as e,c as t,o as a,d as i}from"./app.a79812d4.js";const m='{"title":"ServiceNow.Core","description":"","frontmatter":{},"headers":[{"level":3,"title":"SNow.Core.Authentication.AuthenticationConfig","slug":"snow-core-authentication-authenticationconfig"},{"level":2,"title":"AuthenticationConfig.CertificateName Property","slug":"authenticationconfig-certificatename-property"},{"level":3,"title":"Remarks","slug":"remarks"}],"relativePath":"auto/AuthenticationConfig_CertificateName.md","lastUpdated":1642808227691}',n={},o=i(`<h4 id="servicenow-core" tabindex="-1"><a href="./" title="index">ServiceNow.Core</a> <a class="header-anchor" href="#servicenow-core" aria-hidden="true">#</a></h4><h3 id="snow-core-authentication-authenticationconfig" tabindex="-1"><a href="./SNow_Core_Authentication.html" title="SNow.Core.Authentication">SNow.Core.Authentication</a>.<a href="./AuthenticationConfig.html" title="SNow.Core.Authentication.AuthenticationConfig">AuthenticationConfig</a> <a class="header-anchor" href="#snow-core-authentication-authenticationconfig" aria-hidden="true">#</a></h3><h2 id="authenticationconfig-certificatename-property" tabindex="-1">AuthenticationConfig.CertificateName Property <a class="header-anchor" href="#authenticationconfig-certificatename-property" aria-hidden="true">#</a></h2><p>Name of a certificate in the user certificate store</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> CertificateName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><h4 id="property-value" tabindex="-1">Property Value <a class="header-anchor" href="#property-value" aria-hidden="true">#</a></h4><p><a href="https://docs.microsoft.com/en-us/dotnet/api/System.String" title="System.String" target="_blank" rel="noopener noreferrer">System.String</a></p><h3 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-hidden="true">#</a></h3><p>Daemon applications can authenticate with AAD through two mechanisms: ClientSecret (which is a kind of application password: the property above) or a certificate previously shared with AzureAD during the application registration (and identified by this CertificateName property)</p>`,9),r=[o];function c(s,h,p,d,u,l){return a(),t("div",null,r)}var _=e(n,[["render",c]]);export{m as __pageData,_ as default};
