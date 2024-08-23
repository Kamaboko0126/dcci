import os
from PIL import Image

# 定義資料夾路徑
input_folder = './thumbnails'
output_folder = './thumbnails_jpg'

# 確保輸出資料夾存在
os.makedirs(output_folder, exist_ok=True)

# 遍歷資料夾中的所有檔案
for filename in os.listdir(input_folder):
    if filename.endswith('.png'):
        # 完整的檔案路徑
        input_image_path = os.path.join(input_folder, filename)
        output_image_path = os.path.join(output_folder, filename.replace('.png', '.jpg'))
        
        # 讀取圖片
        with Image.open(input_image_path) as img:
            # 將影像模式轉換為 RGB
            if img.mode != 'RGB':
                img = img.convert('RGB')
            # 調整大小
            img = img.resize((350, 200))
            
            # 設定 DPI 並儲存為 JPG 格式
            img.save(output_image_path, 'JPEG', dpi=(300, 300))

print("所有圖片已成功轉換並調整大小。")