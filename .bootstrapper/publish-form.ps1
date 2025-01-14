# Path to the package.json file
$packageJsonPath = "..\templates\cra-template-dataverse-webresource-form\package.json"

# Read the package.json file
$packageJson = Get-Content -Path $packageJsonPath -Raw | ConvertFrom-Json

# Split the version into major, minor, and patch
$versionParts = $packageJson.version -split '\.'
$major = [int]$versionParts[0]
$minor = [int]$versionParts[1]
$patch = [int]$versionParts[2]
$newPatch = $patch + 1

# Increment the minor version
$newVersion = "$major.$minor.$newPatch"

# Update the version in the package.json object
$packageJson.version = $newVersion

# Convert the package.json object back to a JSON string
$newPackageJsonData = $packageJson | ConvertTo-Json -Depth 10

# Write the updated package.json back to the file
$newPackageJsonData | Set-Content -Path $packageJsonPath -Force

Write-Output "package.json updated successfully to version $newVersion"

Set-Location "..\templates\cra-template-dataverse-webresource-form"
npm publish --access public
Set-Location "..\..\.bootstrapper"