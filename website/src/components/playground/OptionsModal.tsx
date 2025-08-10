import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  Box,
} from "@mui/material";
import { ITransformOptions } from "typia/lib/transformers/ITransformOptions";

interface OptionsModalProps {
  open: boolean;
  options: ITransformOptions;
  onClose: () => void;
  onSave: (options: ITransformOptions) => void;
}

const OptionsModal: React.FC<OptionsModalProps> = ({
  open,
  options,
  onClose,
  onSave,
}) => {
  const [localOptions, setLocalOptions] = React.useState<ITransformOptions>(options);

  React.useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  const handleChange = (key: keyof ITransformOptions) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalOptions({
      ...localOptions,
      [key]: event.target.checked,
    });
  };

  const handleSave = () => {
    onSave(localOptions);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Transform Options</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={localOptions.finite ?? false}
                onChange={handleChange("finite")}
              />
            }
            label={
              <Box>
                <Typography variant="body1">Finite</Typography>
                <Typography variant="caption" color="text.secondary">
                  Validate finite numbers using Number.isFinite()
                </Typography>
              </Box>
            }
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={localOptions.numeric ?? false}
                onChange={handleChange("numeric")}
                disabled={localOptions.finite}
              />
            }
            label={
              <Box>
                <Typography variant="body1">Numeric</Typography>
                <Typography variant="caption" color="text.secondary">
                  Validate numeric values using Number.isNaN() (ignored when finite is true)
                </Typography>
              </Box>
            }
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={localOptions.functional ?? false}
                onChange={handleChange("functional")}
              />
            }
            label={
              <Box>
                <Typography variant="body1">Functional</Typography>
                <Typography variant="caption" color="text.secondary">
                  Validate functional types (becomes false when marshaling/parsing)
                </Typography>
              </Box>
            }
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={localOptions.undefined ?? true}
                onChange={handleChange("undefined")}
              />
            }
            label={
              <Box>
                <Typography variant="body1">Undefined</Typography>
                <Typography variant="caption" color="text.secondary">
                  Allow undefined values in superfluous properties (only affects equals function)
                </Typography>
              </Box>
            }
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OptionsModal;