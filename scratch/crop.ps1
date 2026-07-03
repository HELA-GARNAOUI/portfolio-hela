Add-Type -AssemblyName System.Drawing

$imgPath = "c:\Users\hallo\Downloads\portfolio-website\public\icon.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

# Scan image pixels to find colored bounds
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        # Check if pixel is NOT white/near-white and NOT transparent
        if (($pixel.R -lt 245 -or $pixel.G -lt 245 -or $pixel.B -lt 245) -and $pixel.A -gt 15) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Define cropped dimensions
$width = $maxX - $minX
$height = $maxY - $minY

# Crop with padding
$pad = [math]::Round([math]::Min($width, $height) * 0.04)
$startX = [math]::Max(0, $minX - $pad)
$startY = [math]::Max(0, $minY - $pad)
$cropW = [math]::Min($bmp.Width - $startX, $width + ($pad * 2))
$cropH = [math]::Min($bmp.Height - $startY, $height + ($pad * 2))

# Make destination square canvas
$size = [math]::Max($cropW, $cropH)
$croppedBmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($croppedBmp)
$g.Clear([System.Drawing.Color]::Transparent)

# Center the cropped content
$dx = ($size - $cropW) / 2
$dy = ($size - $cropH) / 2

# Draw cropped portion
$srcRect = New-Object System.Drawing.Rectangle($startX, $startY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle($dx, $dy, $cropW, $cropH)
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Save cropped image back
$bmp.Dispose()
$g.Dispose()
$croppedBmp.Save($imgPath, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Dispose()

Write-Host "Logo successfully cropped and centered!"
