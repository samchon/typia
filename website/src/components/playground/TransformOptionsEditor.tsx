"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import { ITransformOptions } from "../../../../src/transformers/ITransformOptions";

export interface TransformOptionsEditorProps {
  options: ITransformOptions;
  onChange: (options: ITransformOptions) => void;
}

const TransformOptionsEditor: React.FC<TransformOptionsEditorProps> = ({
  options,
  onChange,
}) => {
  const handleOptionChange = (key: keyof ITransformOptions) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...options,
      [key]: event.target.checked,
    });
  };

  return (
    <Accordion
      sx={{
        backgroundColor: "#2d2d2d",
        color: "white",
        "&:before": { display: "none" },
        boxShadow: "none",
        border: "1px solid #444",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="transform-options-content"
        id="transform-options-header"
        sx={{
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SettingsIcon sx={{ fontSize: 20 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Transform Options
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={options.finite ?? false}
                  onChange={handleOptionChange("finite")}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Finite Numbers
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#aaa" }}>
                    Validate finite numbers with Number.isNaN()
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={options.numeric ?? false}
                  onChange={handleOptionChange("numeric")}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Numeric Validation
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#aaa" }}>
                    Validate numbers with Number.isFinite()
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={options.functional ?? false}
                  onChange={handleOptionChange("functional")}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Function Validation
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#aaa" }}>
                    Enable validation of functional types
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={options.undefined ?? true}
                  onChange={handleOptionChange("undefined")}
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Undefined Validation
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#aaa" }}>
                    Check undefined values (default: enabled)
                  </Typography>
                </Box>
              }
            />
          </FormGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default TransformOptionsEditor;