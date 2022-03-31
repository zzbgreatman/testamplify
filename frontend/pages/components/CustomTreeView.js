import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { TableCell, Button, Checkbox, Link } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CustomTreeView(props) {
  const data = props.data || []
  let list = [];
  const properties = ['Name'];
  const headers = [];

  properties.forEach((property) => {
    headers.push(<TableCell key={property} >{property} </TableCell>)
  })

  const getCells = (nodes) => {
    let path = ''
    if (nodes.name.endsWith('parquet')) {
      path = "/file/" + nodes.parent.toString() + '/' + nodes.name;
    } else if (nodes.name.includes('Task')) {
      path = "/file/" + nodes.parent.toString() + '/' + nodes.parent;
    } else {
      path = "/file/" + nodes.name.toString();
    }

    return (
      <TableRow>
        <TableCell>
          <Link href={path} data={nodes} >
            {nodes.name}
          </Link>
        </TableCell>
        <TableCell>{nodes.loc}</TableCell>
        <TableCell>{nodes.init}</TableCell>
        <TableCell>{`${nodes.amount}kb`}</TableCell>
      </TableRow>
    );
  }

  const renderSnaps = (nodes) => (
    <React.Fragment>
      <TreeItem key={nodes.id + 'snaps'} nodeId={nodes.id} label={getCells(nodes)}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderSnaps(node))
          : null}
        <Button size="small" >Detail</Button>
        <Button size="small" >Generate</Button>
        <Button size="small" >Delete</Button>
        <Button size="small" >Setting</Button>
      </TreeItem>
    </React.Fragment>
  );

  const renderTree = (nodes) => (
    <TableRow key={nodes.id}>
      <TreeItem key={nodes.id} nodeId={nodes.id} label={getCells(nodes)}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderSnaps(node))
          : null}
      </TreeItem>
    </TableRow>
  );


  data.forEach(nodes => {
    list.push(renderTree(nodes))
  });
  return (
    <Table size="big">
      <TableHead>
        <TableRow>
          {headers}
        </TableRow>
      </TableHead>
      <TableBody>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 'auto', flexGrow: 1, maxWidth: 'auto', overflowY: 'auto' }}
        >
          {list}
        </TreeView>
      </TableBody>
    </Table>
  );
}
