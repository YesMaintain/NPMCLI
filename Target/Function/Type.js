var r=async(...[t=!1])=>{const e=new Map;return e.set("*.csproj","Nuget"),e.set("Cargo.toml","Cargo"),e.set("composer.json","Composer"),e.set("Gemfile","Bundler"),e.set("package.json","NPM"),e.set("packages.config","Nuget"),e.set("requirements.txt","PIP"),e.set("wrangler.toml","Cloudflare"),t&&e.forEach((s,a)=>{s!==t&&e.delete(a)}),e};export{r as default};