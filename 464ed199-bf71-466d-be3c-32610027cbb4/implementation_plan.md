# Add Stitch MCP Server Configuration

This plan outlines the steps to add the Stitch MCP server to the existing configuration file, enabling its use alongside NotebookLM.

## User Review Required

> [!IMPORTANT]
> I will be using the `@_davideast/stitch-mcp` package with the `proxy` argument, based on common usage patterns for MCP clients.

## Proposed Changes

### `mcp_config.json`

I will add a new entry for `stitch` to the `mcpServers` object.

#### [MODIFY] [mcp_config.json](file:///c:/Users/admin/.gemini/antigravity/mcp_config.json)

- Add `stitch` configuration:
  - Command: `npx`
  - Args: `["-y", "@_davideast/stitch-mcp", "proxy"]`

## Verification Plan

### Automated Tests
- None.

### Manual Verification
- After applying the changes, I will ask you to reload the MCP servers (if applicable) or simply confirm that the Stitch server is recognized.
- I will verify the file content to ensure the JSON is valid.
