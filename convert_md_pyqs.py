import os
import subprocess
import markdown

css_injection = """
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    font-size: 15px !important;
    line-height: 1.6 !important;
    color: #222 !important;
    margin: 40px auto !important;
    max-width: 900px !important;
    padding: 0 40px;
  }
  p, li, span, div {
    font-size: 15px !important;
    line-height: 1.6 !important;
  }
  h1, h2, h3 {
    margin-top: 1.5em !important;
    margin-bottom: 0.5em !important;
    color: #111 !important;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 0.3em;
  }
  b, strong {
    font-weight: 600 !important;
  }
  ul, ol {
    padding-left: 24px !important;
  }
  code {
    background-color: #f6f8fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 85%;
  }
  pre {
    background-color: #f6f8fa;
    padding: 16px;
    border-radius: 6px;
    overflow: auto;
  }
</style>
"""

html_template = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
{css_injection}
</head>
<body>
{{content}}
</body>
</html>
"""

input_dir = "/Users/digantapal/Downloads/communityin/original-site/UIT_Midsem_PYQs"
output_dir = "/Users/digantapal/Downloads/communityin/original-site/public/pyqs"
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for root, _, files in os.walk(input_dir):
    for file in files:
        if file.endswith(".md"):
            year = os.path.basename(root)
            name = os.path.splitext(file)[0]
            md_path = os.path.join(root, file)
            pdf_name = f"{year}_{name}.pdf"
            pdf_path = os.path.join(output_dir, pdf_name)
            html_path = os.path.join(output_dir, f"{name}.html")

            print(f"Processing {year} - {name}...")

            # 1. Convert markdown to HTML
            with open(md_path, "r", encoding="utf-8") as f:
                md_content = f.read()
            
            html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
            final_html = html_template.replace("{content}", html_content)

            with open(html_path, "w", encoding="utf-8") as f:
                f.write(final_html)

            # 2. Convert HTML to PDF
            print(f"Generating PDF for {pdf_name}...")
            subprocess.run([
                chrome_path,
                "--headless",
                "--disable-gpu",
                f"--print-to-pdf={pdf_path}",
                html_path
            ], check=True)

            # 3. Cleanup HTML
            os.remove(html_path)

print("Markdown Conversion complete.")
