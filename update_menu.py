import re

with open('src/data/menu.ts', 'r') as f:
    content = f.read()

# Remove from categories
content = re.sub(r'\s*\{\s*id:\s*"student-combos"[^\}]+\},?', '', content, flags=re.MULTILINE)
content = re.sub(r'\s*\{\s*id:\s*"party-combos"[^\}]+\},?', '', content, flags=re.MULTILINE)

# Remove the student combos and party combos from menuItems
content = re.sub(r'\s*\{[^{}]+category:\s*"student-combos"[^{}]+\},?', '', content)
content = re.sub(r'\s*\{[^{}]+category:\s*"party-combos"[^{}]+\},?', '', content)

# Remove image from easy-money
def remove_image_from_easy_money(match):
    obj = match.group(0)
    # The image field typically looks like:  image: img(IMG.combo, 0),
    # Or image: img(IMG.combo, 1),
    # We can match `image: img(IMG.combo, \d+),` and remove it
    obj_no_img = re.sub(r'\s*image:\s*img\([^)]+\),', '', obj)
    return obj_no_img

content = re.sub(r'\{[^{}]+category:\s*"easy-money"[^{}]+\}', remove_image_from_easy_money, content)

# Remove the headers for student and party combos just to be clean
content = re.sub(r'\s*// ═══════════════════════════════════════\s*// 🎓 STUDENT SPECIAL COMBOS\s*// ═══════════════════════════════════════', '', content)
content = re.sub(r'\s*// ═══════════════════════════════════════\s*// 🎉 PARTY COMBOS\s*// ═══════════════════════════════════════', '', content)

with open('src/data/menu.ts', 'w') as f:
    f.write(content)

