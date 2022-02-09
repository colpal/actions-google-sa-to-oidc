# DEPRECATED: Use https://github.com/google-github-actions/auth instead

# Google SA to OIDC - GitHub Actions

Easily derive an OIDC token from a Google Cloud Platform service account within a GitHub Action.
This is useful for:

- Passing through an IAP via an `Authorization` header

## Usage

```yaml
steps:
  - id: oidc
    uses: colpal/actions-google-sa-to-oidc@v1
    with:
      sa_key: ${{ secrets.YOUR_SERVICE_ACCOUNT }}
      target_audience: YOUR_TARGET_AUDIENCE

  - run: curl -H "$HEADER" https://localhost
    env:
      HEADER: "Authorization: Bearer ${{ steps.oidc.outputs.token }}"
```
